function storeEmployees(input) {
  input
    .reduce((acc, name) => {
      acc.push({
        name,
        personalNumber: name.length,
      });

      return acc;
    }, [])
    .forEach((employee) => {
      console.log(
        `Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`
      );
    });
}
