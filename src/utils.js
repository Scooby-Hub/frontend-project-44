const getRandom = (sice, till) => (Math.round(Math.random() * (till - sice) + sice));

export default getRandom;
