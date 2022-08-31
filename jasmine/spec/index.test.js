describe('counter', () => {
  beforeEach(() => {
    counter.reset();
  });

  it('default', () => {
    expect(counter.value).toBe(0);
  });

  it('increment', () => {
    counter.increment();
    counter.increment();
    counter.increment();

    expect(counter.value).toBe(3);
  });

  it('decrement', () => {
    counter.decrement();
    counter.decrement();

    expect(counter.value).toBe(-2);
  });

  it('reset', () => {
    counter.reset();

    expect(counter.value).toBe(0);
  });

  it('incrementBy', () => {
    counter.reset();
    counter.incrementBy(10);

    expect(counter.value).toBe(10);
  });
});
