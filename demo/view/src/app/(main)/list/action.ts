'use server';

import { PrismaClient } from '@prisma/client'
import { cookies } from 'next/headers';
import { cache } from 'react';

export const getItemsAction = cache(async (): Promise<UsersResponse> => {
    const prisma = new PrismaClient();
    const { value } = cookies().get('user_id') ?? {};

    try {
        const userItemList = await prisma.user_items.findMany({
            where: {
                user_id: Number(value)
            },
        })

        return {
            code: 0,
            data: userItemList
        };
    } catch (e) {
        return {
            code: 1,
            data: [],
            msg: '获取失败，请重新登录',
        };
    }
})


export const addItemAction = async (name: string): Promise<AddResponse> => {
    'use server';

    const prisma = new PrismaClient();
    const { value } = cookies().get('user_id') ?? {};

    try {
        const newUserItem = await prisma.user_items.create({
            data: {
                user_id: Number(value),
                name: name,
            },
        });

        if (newUserItem.name === name) {
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


export const getItemByIdAction = async (id: number): Promise<UsersResponse> => {
    const prisma = new PrismaClient();

    try {
        const userItem = await prisma.user_items.findUnique({
            where: {
                id: Number(id)
            },
        })

        return {
            code: 0,
            data: userItem
        };
    } catch (e) {
        return {
            code: 1,
            data: [],
            msg: '获取失败，请重新登录',
        };
    }
}