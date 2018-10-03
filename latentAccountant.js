const urlData = [];

function measure(asyncFn) {

    const measuredFn = e => {
        const start = performance.now();

        Promise.resolve(asyncFn(e)).then((res) => {
            const timeElapsed = performance.now() - start;
            console.log(`${e.request.url}  - ${timeElapsed}ms`);

            urlData.push({
                url: e.request.url,
                timeElapsed
            });

            return res;
        });
    };

    return measuredFn;

}
