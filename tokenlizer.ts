export enum TokenTypes {
    Paren = 'Paren'
}
interface Token {
    type: TokenTypes,
    value: string
}
export const tokenizer = function (code: string) {
    const tokens: Token[] = [];
    let current = 0;
    let char = code[current];
    if (char === '(') {
        tokens.push({ type: TokenTypes.Paren, value: char })
    }
    return tokens

}