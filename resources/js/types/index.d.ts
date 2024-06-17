export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};


export interface PaketSoal {
    id: BigInteger;
    title: string;
    slug: string;
    user_id: BigInteger;
    show_correct_answer: boolean | number;
    accept_responses: boolean | number;
    created_at: string;
    updated_at: string;
} 
