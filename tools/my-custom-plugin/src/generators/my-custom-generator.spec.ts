import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { myCustomGeneratorGenerator } from './my-custom-generator';
import { MyCustomGeneratorGeneratorSchema } from './schema';

describe('my-custom-generator generator', () => {
  let tree: Tree;
  const options: MyCustomGeneratorGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await myCustomGeneratorGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
