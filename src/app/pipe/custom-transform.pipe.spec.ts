import { CustomTransformPipe } from './custom-transform.pipe';

describe('CustomTransformPipe', () => {
  let pipe: CustomTransformPipe;

  beforeEach(() => {
    pipe = new CustomTransformPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform single word correctly', () => {
    const result = pipe.transform('Hello');
    expect(result).toBe('H E L L O');
  });

  it('should transform multiple camelCase words correctly', () => {
    const result = pipe.transform('helloWorldTest');
    expect(result).toBe('H E L L O W O R L D T E S T');
  });

  it('should handle empty string correctly', () => {
    const result = pipe.transform('');
    expect(result).toBe('');
  });

  it('should handle string without uppercase letters correctly', () => {
    const result = pipe.transform('hello');
    expect(result).toBe('H E L L O');
  });

  it('should handle string with consecutive uppercase letters correctly', () => {
    const result = pipe.transform('NASA');
    expect(result).toBe('N A S A');
  });

  it('should handle string with spaces correctly', () => {
    const result = pipe.transform('hello World');
    expect(result).toBe('H E L L O W O R L D');
  });

  it('should handle already transformed string correctly', () => {
    const result = pipe.transform('H E L L O W O R L D');
    expect(result).toBe('H E L L O W O R L D');
  });
});
