
export class TestNggaValueConverter {
  public toView(tekst: string) {
    return tekst + " ngga";
  }

  public fromView(tekst: string) {
    if (tekst.length > 5) {
      return tekst.slice(0, -5);
    }
    return tekst;
  }
}
