import Todo from './models/todo';

export default function () {
  Todo.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const text1 = 'test todo 1';
    const text2 = 'test todo 2';

    const todo1 = new Todo({ text: text1, completed: false, cuid: 'cikqgkv4q01ck7453ualdn3hd' });
    const todo2 = new Todo({ text: text2, completed: false, cuid: 'cikqgkv4q01ck7453ualdn3hf' });

    Todo.create([todo1, todo2], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
