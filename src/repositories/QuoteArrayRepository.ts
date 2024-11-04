import logger from '../logger';

const quotesList = [
  { id: 1, authorId: 1, text: 'First, solve the problem. Then, write the code.', createdAt: '2024-09-14 13:59:00' },
  { id: 2, authorId: 2, text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', createdAt: '2024-09-14 13:59:01' },
  { id: 3, authorId: 3, text: 'If you stop learning, then the projects you work on are stuck in whatever time period you decided to settle.', createdAt: '2024-09-14 13:59:02' },
  { id: 4, authorId: 4, text: 'Bad programmers worry about the code. Good programmers worry about the data structures and their relationships.', createdAt: '2024-09-14 13:59:03' },
  { id: 5, authorId: 4, text: 'Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.', createdAt: '2024-09-14 13:59:04' },
  { id: 6, authorId: 4, text: 'When you say \'I wrote a program that crashed Windows,\' people just stare at you blankly and say \'Hey, I got those with the system, for free.\'', createdAt: '2024-09-14 13:59:05' },
  { id: 7, authorId: 4, text: 'A computer is like air conditioning - it becomes useless when you open Windows.', createdAt: '2024-09-14 13:59:06' },
  { id: 8, authorId: 4, text: 'If you think your users are idiots, only idiots will use it.', createdAt: '2024-09-14 13:59:07' },
  { id: 9, authorId: 5, text: 'You should name a variable using the same care with which you name a first-born child.', createdAt: '2024-09-14 13:59:08' },
  { id: 10, authorId: 6, text: 'If you are born poor, it is not your mistake, but if you die poor it is your mistake.', createdAt: '2024-09-14 13:59:09' },
  { id: 11, authorId: 6, text: 'No one will need more than 637Kb of memory for a personal computer.', createdAt: '2024-09-14 13:59:10' },
  { id: 12, authorId: 7, text: 'Debugging is like being the detective in a crime movie where you are also the murderer.', createdAt: '2024-09-14 13:59:11' },
  { id: 13, authorId: 8, text: 'An expert is a person who has made all the mistakes that can be made in a very narrow field.', createdAt: '2024-09-14 13:59:12' },
  { id: 14, authorId: 9, text: 'Some people, when confronted with a problem, think “I know, I’ll use regular expressions.” Now they have two problems.', createdAt: '2024-09-14 13:59:13' },
  { id: 15, authorId: 10, text: 'Every programmer is an author.', createdAt: '2024-09-14 13:59:14' },
  { id: 16, authorId: 11, text: 'Code is like humor. When you have to explain it, it\'s bad.', createdAt: '2024-09-14 13:59:15' },
  { id: 17, authorId: 12, text: 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.', createdAt: '2024-09-14 13:59:16' },
  { id: 18, authorId: 13, text: 'A computer is like a mischievous genie. It will give you exactly what you asked for, but not always what you want.', createdAt: '2024-09-14 13:59:17' },
  { id: 19, authorId: 14, text: 'Code never lies; comments sometimes do.', createdAt: '2024-09-14 13:59:18' },
  { id: 20, authorId: 15, text: 'Whether you want to uncover the secrets of the universe, or you just want to pursue a career in the 21st century, basic computer programming is an essential skill to learn.', createdAt: '2024-09-14 13:59:19' },
  { id: 21, authorId: 16, text: 'Falling in love with code means falling in love with problem solving and being a part of a forever ongoing conversation.', createdAt: '2024-09-14 13:59:20' },
  { id: 22, authorId: 17, text: 'There\'s no test like production!', createdAt: '2024-09-14 13:59:21' },
  { id: 23, authorId: 18, text: 'Programming is not about typing, it\'s about thinking.', createdAt: '2024-09-14 13:59:22' },
  { id: 25, authorId: 19, text: 'Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday\'s code.', createdAt: '2024-09-14 13:59:23' },
  { id: 26, authorId: 20, text: 'What one programmer can do in one month, two programmers can do in two months.', createdAt: '2024-09-14 13:59:24' },
  { id: 27, authorId: 5, text: 'It is not the language that makes programs appear simple. It is the programmer that make the language appear simple!', createdAt: '2024-09-14 13:59:25' },
  { id: 28, authorId: 21, text: 'A plan is an example of what could happen, not a prediction of what will happen.', createdAt: '2024-09-14 13:59:26' },
  { id: 29, authorId: 22, text: 'The trick is to fix the problem you have, rather than the problem you want.', createdAt: '2024-09-14 13:59:27' },
  { id: 30, authorId: 27, text: 'It works on my machine.', createdAt: '2024-09-14 13:59:28' },
  { id: 31, authorId: 23, text: 'The first step of any project is to grossly underestimate its complexity and difficulty.', createdAt: '2024-09-14 13:59:29' },
  { id: 32, authorId: 24, text: 'One of the best programming skills you can have is knowing when to walk away for awhile.', createdAt: '2024-09-14 13:59:30' },
  { id: 33, authorId: 17, text: 'Weeks of coding can save you hours of planning.', createdAt: '2024-09-14 13:59:31' },
  { id: 34, authorId: 25, text: 'Always leave the campground cleaner than you found it.', createdAt: '2024-09-14 13:59:32' },
  { id: 35, authorId: 26, text: 'Programming isn\'t about what you know; it\'s about what you can figure out.', createdAt: '2024-09-14 13:59:33' },
  { id: 36, authorId: 27, text: 'Documentation is a love letter that you write to your future self.', createdAt: '2024-09-14 13:59:34' },
  { id: 37, authorId: 28, text: 'Sometimes it is the people no one can imagine anything of who do the things no one can imagine.', createdAt: '2024-09-14 13:59:35' },
  { id: 38, authorId: 29, text: 'When debugging, novices insert corrective code; experts remove defective code.', createdAt: '2024-09-14 13:59:36' },
  { id: 39, authorId: 30, text: 'Hell isn\'t other people\'s code. Hell is your own code from 3 years ago.', createdAt: '2024-09-14 13:59:37' },
  { id: 40, authorId: 31, text: 'Rarely is anyone thanked for the work they did to prevent the disaster that didn\'t happen.', createdAt: '2024-09-14 13:59:38' },
  { id: 44, authorId: 32, text: 'So much complexity in software comes from trying to make one thing do two things.', createdAt: '2024-09-14 13:59:39' },
];

export default class QuoteKnexRepository implements QuoteRepository {

  public async get(id: number): Promise<Quote> {
    logger.debug(`${this.constructor.name}.get`, { id });

    const quote = quotesList.find((q) => q.id === id);

    return quote;
  }

  public async find(params: QuoteRepository.FindParameters): Promise<Quote[]> {
    logger.debug(`${this.constructor.name}.find`, { params });

    const { first, after, authorId, query } = params;

    const quotes = quotesList.filter((quote) => {
      if (typeof authorId !== 'undefined' && quote.authorId !== authorId) {
        return false;
      }

      if (typeof query !== 'undefined' && quote.text.indexOf(query) === -1) {
        return false;
      }

      return true;
    });

    return quotes.splice(after, first);
  }

  public async count(params: QuoteRepository.CountParameters): Promise<number> {
    logger.debug(`${this.constructor.name}.count`, { params });
    
    const { authorId, query } = params;

    const count = quotesList.filter((quote) => {
      if (typeof authorId !== 'undefined' && authorId !== null && quote.authorId === authorId) {
        return false;
      }

      if (typeof query !== 'undefined' && query !== null && quote.text.indexOf(query) === -1) {
        return false;
      }

      return true;
    }).length;

    return count;
  }
}
