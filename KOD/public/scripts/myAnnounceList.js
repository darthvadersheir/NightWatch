const deleteAnnounce = (data) => {
    socket.emit("deleteAnnounce", {data})
    // location.href = "/joinAnnounce"
    console.log(data)
    window.location.reload()
}

const routeAnnounce = () => {
    location.href = "/announce"
}

