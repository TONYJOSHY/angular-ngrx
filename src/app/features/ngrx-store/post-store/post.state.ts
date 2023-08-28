export interface Post {
    title: string;
    description: string;
}

export interface PostState {
    post: Post[],
    items: number
}

export const postState: PostState = {
    post: [ { title: 'First', description: 'First item description' } ],
    items: 1
}
