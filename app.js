const hobbies = ['Sports', 'Cooking', 'Travelling'];
 console.log(hobbies[1])

 hobbies.push('Programming');

 console.log(hobbies);

 const index = hobbies.findIndex((item) => item === 'Programming');
     
 
 console.log(index);

 const objects = [1, 2, 3, 4];
     const transforToObjects = objects.map((itme) => ({val: itme}));
     console.log(transforToObjects);