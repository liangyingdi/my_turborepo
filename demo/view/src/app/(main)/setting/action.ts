'use server';

import { PrismaClient } from '@prisma/client'
import { cookies } from 'next/headers';

export const updateThemeAction = async (id: number, theme: string): Promise<AddResponse> => {
    'use server';

    const prisma = new PrismaClient();
    const { value } = cookies().get('user_id') ?? {};

    try {
        const newThemeItem = await prisma.user_setting.update({
            where: {
                id: id,
                user_id: Number(value),
            },
            data: {
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
                msg: '修改失败，请重试...',
            };
        }
    } catch (e) {
        return {
            code: 1,
            msg: '修改失败，请重试...',
        };
    }
}


export const getThemeByUserIdAction = async (): Promise<ThemeResponse> => {
    const prisma = new PrismaClient();
    const { value } = cookies().get('user_id') ?? {};

    try {
        const theme = await prisma.user_setting.findMany({
            where: {
                user_id: Number(value)
            },
        })

        return {
            code: 0,
            data: theme
        };
    } catch (e) {
        return {
            code: 1,
            data: [],
            msg: '获取失败，请重新登录',
        };
    }
}

export const addThemeAction = async (theme: string): Promise<AddResponse> => {
    'use server';
    const prisma = new PrismaClient();
    const { value } = cookies().get('user_id') ?? {};

    try {
        const newThemeItem = await prisma.user_setting.create({
            data: {
                user_id: Number(value),
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