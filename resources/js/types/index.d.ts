export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    password?: string;
    password_confirmation?: string;
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
    students: Student[];
}

export interface Question {
    id: number,
    slug: string,
    user_id: BigInteger,
    paket_soal_slug: string,
    image_path?: string,
    content: string,
    type: string,
    format: {
        option_a?: string,
        option_b?: string,
        option_c?: string,
        option_d?: string,
        option_e?: string,
        answer_key: string,
        bobot?: number
    }
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
    answers?: Answer[],
    groupedAnswer: {
        multiple_choice?: Answer[],
        essay?: Answer[],
    },
    result?: {
        score: number,
        trueAnswers: number,
        questionTotal: number,
        progress: number,
        answeredTotal: number,
    },
    trueAnswer?: number,
    updated_at: string,
    created_at: string
}

export interface Answer {
    id: number,
    u_id: string,
    answer: string,
    paket_soal_slug: string,
    question_slug: string,
    score: number,
    type?: string,
    created_at: string,
    updated_at: string
}

export interface Validity {
    rTable: number,
    studentTotal: number,
    questionTotal: number,
    trueAnswerTotalByStudent: number[],
    questionsValidity: {
        questionSlug: string,
        correlationValue: number | null,
        validity: boolean | string,
        trueAnswerTotalByQuestion: number,
    }[]
}

export interface Reliability {
    rTable: number,
    rHitung: number,
    reliabilitas: boolean
}

export interface TingkatKesulitan {
    value: number,
    category: string,
    question_slug: string
}

export interface DayaPembeda {
    dayaPembeda: {
        question_slug: string,
        value: number,
        category: string,
    }[],
    lowerGroupStudents: Student[],
    middleGroupStudents?: Student[],
    upperGroupStudents: Student[],
}

export interface DayaPembedaEssay {
    category: string,
    value: number,
    question_slug: string
}
