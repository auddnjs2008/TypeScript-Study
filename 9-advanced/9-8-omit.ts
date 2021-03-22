{
  // omit은 pick과 반대로 원하는 것을 빼버리는 걸 할 수 가 있다.

  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Omit<Video, "url" | "data";
  // url 과 데이터를 뺀 나머지 애들을 쓰고 싶을때

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }

  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: "title",
    };
  }
}
