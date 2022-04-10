export type Project = {
    id: string,
    title: string;
    description: string;

    isNew?: boolean | undefined;
    isOld?: boolean | undefined;
    recommended?: boolean | undefined;
    nextjs?: boolean | undefined;
    python?: boolean | undefined;
    remix?: boolean | undefined;
    typescript?: boolean | undefined;
    flutter?: boolean | undefined;
    javascript?: boolean | undefined;
    gql?: boolean | undefined;
    image?: string | undefined;
    github?: string | undefined;
    url?: string | undefined;

};