export interface AviaState {
  activeButton: number;
}

export interface RootState {
  avia: {
    activeButton: number;
    all: boolean;
    direct: boolean;
    oneStop: boolean;
    twoStop: boolean;
    threeStop: boolean;
  };
}
