import DataLoader from 'dataloader';
import repositories from '../repositories';

async function getAuthorsById(ids: number[]): Promise<Author[]> {
  const authors = await repositories.Author.getMany(ids);
  return ids.map((id) => {
    return authors.find((author) => author.id === id);
  });
}

export default new DataLoader(getAuthorsById);
