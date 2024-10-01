'use server';

import { PrismaClient } from '@prisma/client'
import { cookies } from 'next/headers';

export const action = async (formdata: FormData): Promise<RegisterResponse> => {
    'use server';

    const prisma = new PrismaClient();

    const username = formdata.get('username') as string;
    const password = formdata.get('password') as string;

    try {
        const newUser = await prisma.user.create({
            data: {
                username,
                password,
            },
        });

        if (newUser.username === username) {
            await addThemeAction(newUser.id, "pink");
            return {
                code: 0,
                data: newUser
            };
        } else {
            return {
                code: 1,
                data: {},
                msg: '注册失败，请联系管理员',
            };
        }
    } catch (e) {
        return {
            code: 1,
            data: {},
            msg: '注册失败，请联系管理员',
        };
    }
}


export const addThemeAction = async (user_id: number, theme: string): Promise<AddResponse> => {
    'use server';
    const prisma = new PrismaClient();

    try {
        const newThemeItem = await prisma.user_setting.create({
            data: {
                user_id: user_id,
                theme: theme,
            }
        });

        if (newThemeItem.theme === theme) {
            return {
                code: 0,
            };
        } else {
            return {
                code: 1,
                msg: '添加失败，请重试...',
            };
        }
    } catch (e) {
        return {
            code: 1,
            msg: '添加失败，请重试...',
        };
    }
}



export const updateUserAction = async (id: number, password: string): Promise<AddResponse> => {
    'use server';

    const prisma = new PrismaClient();
    const { value } = cookies().get('user_id') ?? {};

    try {
        const user = await prisma.user.update({
            where: {
                id: Number(value),
            },
            data: {
                password: password,
            }
        });

        if (user.password === password) {
            return {
                code: 0,
            };
        } else {
            return {
                code: 1,
                msg: '注册失败，请重试...',
            };
        }
    } catch (e) {
        return {
            code: 1,
            msg: '注册失败，请重试...',
        };
    }
}