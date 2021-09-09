describe('valid config', () => {
  // eslint-disable-next-line global-require
  const config = require('../..');
  const expectIsArrayOfLength = (arr, length) => {
    expect(Array.isArray(arr)).toBe(true);
    expect(arr).toHaveLength(length);
  };

  it('is an object', () => {
    expect(config).not.toBeNull();
    expect(typeof config).toBe('object');
    expect(Array.isArray(config)).toBe(false);
  });

  it('uses the eslint vue plugin', () => {
    expectIsArrayOfLength(config.plugins, 1);
    expect(config.plugins[0]).toBe('vue');
  });

  it('only extends programic-base and plugin:vue/recommended', () => {
    expectIsArrayOfLength(config.extends, 2);
    expect(config.extends[0]).toBe('@programic/eslint-config-base');
    expect(config.extends[1]).toBe('plugin:vue/vue3-recommended');
  });
});
