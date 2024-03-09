
export abstract class Direction {
  protected abstract value: String;
  abstract turnRight(): Direction;
  abstract turnLeft(): Direction;
  public getValue(): String {
    return this.value;
  }
  public isSouth(): boolean {
    return false;
  }
}
