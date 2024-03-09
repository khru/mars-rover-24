
export abstract class Direction {
  protected abstract value: String;
  abstract turnRight(): Direction;
  public getValue(): String {
    return this.value;
  }
}
