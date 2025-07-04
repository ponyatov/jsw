console.log(1 + 2 / 3);

const libjsw = Deno.dlopen(
    './target/x86_64-unknown-linux-gnu/debug/libjsw.so',
    {
        add_numbers: { parameters: ['i32', 'i32'], result: 'i32' },
    }
);

libjsw.symbols.add_numbers(12, 34);
console.log(libjsw);
