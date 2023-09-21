let UUID: number = 0;

function UniqueID() {
  const getID = (): number => {
    UUID++;
    return UUID;
  };

  return {
    getID,
  };
}

export default UniqueID
