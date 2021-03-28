import { BaseComponent } from "../../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
           <div class="video__holder"><iframe frameborder="0" class="video__thumbnail"></iframe></div>
           <p class="page-item__title video__title"></p>
           </section>`);
    const iframeTag = this.element.querySelector(
      ".video__thumbnail"
    )! as HTMLIFrameElement;
    iframeTag.src = this.convertToEmbeddedURL(url); // url -> videoId만 추출->임베드용 url

    //주소창 url
    //

    const pElement = this.element.querySelector(
      ".video__title"
    )! as HTMLParagraphElement;
    pElement.textContent = title;
  }

  private convertToEmbeddedURL(url: string): string {
    //정규 표현식 Regex 꼭 알아야한다.
    const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);
    console.log(match);
    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) {
      //"https://www.youtube.com/embed/FtTqEAjM_t8"
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}
