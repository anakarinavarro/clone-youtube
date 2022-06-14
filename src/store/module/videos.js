export const videosModule = {
  namespaced: true,
  state: {
    videos: [],
  },
  mutations: {
    SET_VIDEOS(state, newVideos) {
      state.videos = newVideos;
    },
  },
  actions: {
    async getAllVideos(context) {
      try {
        if (context.state.videos.length === 0) {
          const Videos = await fetch("/video.json").then((response) => response.json());
          context.commit("SET_VIDEOS", Videos);
        }
      } catch (e) {}
    },
  },
};
