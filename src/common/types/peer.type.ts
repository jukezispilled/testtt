import { Direction, Player } from './player.type';

export enum DataType {
  POSITIONS = 0,
  GAME = 1,
  DIRECTION = 2,
  SHOOT = 3,
}

export type Data = {
  type: DataType;
};

export type PositionData = {
  type: DataType.POSITIONS;
  positions: {
    [key: string]: [number, number];
  };
};

export type GameData = {
  type: DataType.GAME;
  players: Map<string, Player>;
};

export type DirectionData = {
  type: DataType.DIRECTION;
  direction: Direction;
};

export type ShootData = {
  type: DataType.SHOOT;
};