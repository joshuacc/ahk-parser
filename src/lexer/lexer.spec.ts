import {describe, expect, it} from '@jest/globals';
import {Lexer} from '.';

describe('Lexer#lex()', () => {
  it('returns an empty array if the script is empty', () => {
    const lexer = new Lexer();
    const tokens = lexer.lex('');
    expect(tokens).toEqual([]);
  });
});