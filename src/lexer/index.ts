type TokenType = 'keyword' | 'identifier' | 'number' | 'string' | 'operator' | 'punctuator' | 'comment' | 'whitespace' | 'eof';

interface Token {
    type: TokenType;
    value: string;
    line: number;
    column: number;
}

export class Lexer {
    lex(script: string): Token[] {
        return [];
    }
}