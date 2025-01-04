
// steps to add a new generator
// via 2 steps adding nx plugin and generating a library under tools and then executing the library
// npx nx add @nx/plugin
// npx nx g @nx/plugin:plugin tools/recommended
// npx nx g @angular-monorepo/recommended:library test-library

import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { LibraryGeneratorSchema } from './schema';

export async function libraryGenerator(
  tree: Tree,
  options: LibraryGeneratorSchema
) {
  const projectRoot = `libs/${options.name}`;
  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`,
    targets: {},
  });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
}

export default libraryGenerator;
