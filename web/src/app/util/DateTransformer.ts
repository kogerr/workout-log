export class DateTransformer {

  public static decompose(date: Date): { year: number, month: number, day: number } {
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    return {year, month, day};
  }

}
