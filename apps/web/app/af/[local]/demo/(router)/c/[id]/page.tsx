export const generateStaticParams = async () => {
    return [
        {
            id: '1',
        },
        {
            id: '2',
        },
        {
            id: '3',
        },
    ];
};

export const dynamicParams = false;

export default async({params}: {params: {id: string, local: string}}) => {
    await new Promise((res: (value: unknown) => void) => setTimeout(() => res(''), 3000));

    return (
        <div>
            id:{params.id}
        </div>
    )
}