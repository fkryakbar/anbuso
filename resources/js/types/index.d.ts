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
    questions?: Question[];
}

export interface Question {
    id: BigInteger,
    slug: string,
    user_id: BigInteger,
    paket_soal_slug: string,
    image_path?: string,
    content: string,
    option_a: string,
    option_b: string,
    option_c: string,
    option_d: string,
    option_e: string,
    answer_key: string,
    created_at: string,
    updated_at: string,
    answer?: Answer
}

export interface Student {
    grade: string,
    id: number,
    name: string,
    paket_soal_slug: string,
    u_id: string,
    answers?: Answer,
    result?: {
        score: number,
        trueAnswers: number,
        questionTotal: number,
    },
    updated_at: string,
    created_at: string
}

export interface Answer {
    id: number,
    u_id: string,
    answer: string,
    paket_soal_slug: string,
    question_slug: string,
    result: boolean,
    created_at: string,
    updated_at: string
}
