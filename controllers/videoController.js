export const videoHome = (req, res) => res.render("home", { pageTitle : "Home" });
export const searchVideos = (req, res) => {
    const {
        query: { term: searchingBy }
        } = req
    // === const searchingBy = req.query.term;
    res.render("search", { pageTitle : "Search", searchingBy });
}
export const videos = (req, res) => res.render("videos", { pageTitle : "Videos" });
export const upload = (req, res) => res.render("upload", { pageTitle : "Upload" });
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle : "Video Details" });
export const editVideo = (req, res) => res.render("editVideo", { pageTitle : "Edit Video" });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle : "Delete Video" });
