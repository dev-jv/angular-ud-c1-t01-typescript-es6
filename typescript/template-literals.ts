(function () {
    function getAge() {
        return 10 + 20 + 4
    }
    const name = 'Nick';
    const lastName = 'Burkhardt';
    const age = 33;

    // const out = name + lastName + age;
    // const out = name + " " + lastName + "(" + age + ")";
    // const out = `${ name } ${ lastName } (${age})`;
    const out = `${ name }\n${ lastName }\n(${getAge()})`;

    console.log(out);
})();
