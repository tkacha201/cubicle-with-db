const uniqid = require("uniqid");

const cubes = [
  {
    id: "1lvc06uslnrfoon6",
    name: "The 2x2 Rubik's Cube",
    description:
      "Or the Pocket Cube is a version of the Rubik's cube with just two layers. It is also called the Mini Cube. This Pocket Cube might seem very simple to solve at first glance, but it has more than 3.6 million possible permutations! Mind-boggling, isn't it? There are only four stickers on each face of this cube as compared to the colour patterns of the Rubik's Cube. Therefore, the solution is to twist the cube around and pave your own path.",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0270/0342/0758/files/2x2.jpg?v=1609821372",
    difficultyLevel: 1,
  },
  {
    id: "1lvc06uslnrfq4fv",
    name: "The 4x4 Rubik's Cube",
    description:
      "The 4x4 Rubik's Cube is also called Rubik's Revenge. It was originally created by a Hungarian designer Sebestény Péter. This puzzle has 24 edges, 24 centres and eight corners. It's a mechanism, algorithms and notations are quite similar to the Rubik's Cube. However, the four centrepieces are held together by a hidden centre. There are many more modifications and variants of the Rubik's Revenge that are built on the same mechanism and concept.",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0270/0342/0758/files/4x4_480x480.jpg?v=1609936489",
    difficultyLevel: 4,
  },
  {
    id: "1lvc06uslnrfr2jc",
    name: "The 5x5 Rubik's Cube",
    description:
      "The 5x5 Rubik's Cube is also known as the Professor's Cube. It was invented by Udo Krell. This type of Rubik's Cube has around 2.82 x 1074 possible combinations. This is approximate to the number of atoms in the universe. The method of solving the 5x5 cube is similar to that of the classic puzzle and involves solving the centres, pairing the pieces to create the edges and finally solving it like a 3x3 cube.",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0270/0342/0758/files/5x5_d480a6aa-44f3-48ec-99fa-fe495906d8bc_480x480.jpg?v=1609993385",
    difficultyLevel: 4,
  },
];

exports.create = (cubeData) => {
  const id = uniqid();
  console.log({ id });
  const newCube = {
    id,
    ...cubeData,
  };

  cubes.push(newCube);

  return newCube;
};
exports.getAll = () => {
  return [...cubes];
};
