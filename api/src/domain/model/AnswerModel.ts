export interface AnswerModel {
    answerId: string;
    questionId: string;
    userId: string | null;
    answer: string;
    created_at: Date;
    updated_at: Date | null;
}