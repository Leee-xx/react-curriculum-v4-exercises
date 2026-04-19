const SnackList = () => {
  const snacks = [
    {
      name: 'KitKat Double Matcha',
      rank: 3,
    },
    {
      name: 'Ritter Sports Chocolate Bars',
      rank: 2,
    },
    {
      name: "Trader Joe's Chili & Lime Tortilla Chips",
      rank: 1,
    },
  ];

  return (
    <ol>
      {snacks
        .toSorted((a, b) => a.rank - b.rank)
        .map((item) => (
          <li key={item.rank}>{item.name}</li>
        ))}
    </ol>
  );
};

export default SnackList;
