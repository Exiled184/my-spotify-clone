


export default function SearchList({ artists, tracks }) {


    const renderArtists = () => {
        return artists.map(artist => {
            const { images, name } = artist
            const width = 50
            const height = 50
            // if (!images) return <p>No Images</p>

            // result item component
            const { url = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAM1BMVEW7u7vz8/Pu7u739/e4uLji4uK+vr7Kysq0tLTHx8fR0dHr6+vExMTn5+fNzc3f39/Z2dlS1a/0AAADkklEQVR4nO2aiXKjMBBErQOhE/j/r93RCHM44HWqtJE21a9cwUEYpumZQVA8HgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAdTFUaCtHTUJ2plZZR/QMm3UbMrARRTwfvbW4kZuDDy2qwmKGdGJVGV40xtRUjva6Ibysm1KxXPUrV1JnxW8cuBtyOjrKlM+qbYnzuffPdtbFHZ26jMWHt5e56k8bOXIiJU7zbvmjJXHvTnTNRquDNVUB62rTcXBm7c4ZmBUoM/iLXbNrECHG9w76c0a5UhRicfQ3KioMYd7nDvsTY8IxWLsaeN7fiwGVd9SVG+8PJD/58RbHDPijvaqYjMaeTT3LOueY6bwDni6Ze1EkMneZjX7Pzc/jamL6cieIVpbw5/UC90dLamZMYPXwRQ3LkuLtD99khpKu+XYb7EaOnCy2ca26LXluead5MzjpKM5PUpRq6vCzxHKEx0dCf17D7aQB6uZbCcsJyiFw7ssa44Uu+deOMjuFeDJmTvN5Cz1lmZmoGaTr17j7E5DiXmyTb5bh1SqAjOTMGmbvDHA/zhE7STGsn32ph5gfPCXQkNSmVH8hlz7VOnNFmeG/MSpnhaGP8bpkcn7nWQWvWVNt0ryJDLpogc/rkZ2lcQrTgTzGBhtLIpWMo7cpQoN6dYqmnHsTkoycRAsVKweXQKcqQteUFf5Xlex5cqCXbWZZN8jA7xleeLmpGPyb2YNUSZBEhWQArIzG8hr3wJgrJxshiWx4a6Y6htZjgyBhtQnm6ylpYgxDFFLnKo7Fc8SX70kCLTXaRLubJNG4AKoxU/XYR4SlmzSipshHZl8Bxl4pZa2hdKcp4STipxGQbi+Gaic/n3sUZrgfOny3ufYPNqqMYTkTpbQc1YxPHXWItVU7LFIoznFFsU650LnpxEMNtoySks675dSafzzWLVAlWruc7OyO2VJKlPa8d/Clo7Xp5k7FxmmUxRv5tIvMhrdOMxFj/wUTm/xFTSQuLaZxmEHMrpnFrhjO3YtAAIOYHxDRPs0oXzR4mmr8qzegGoI4WGVs/A8g3Z9FXIerWYvLDI22r0P7dGZX8SEz0mejvxJ/jv+vK19VftyJ847eaxK9532z++L7rc1q9Cfhw9d5o3Ll8Q+AH0G6uzs07Qj8ip/Kha+8PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAd/gDhN89GiWuMNkAAAAASUVORK5CYII=" } = images[0] || {}
            return (
                <div key={artist.id} style={
                    {
                        display: "flex",
                        flexDirection: "",
                        width: 800,
                        alignItems: "center"
                    }}>
                    {<img width={width} height={height} src={url} alt="" />}
                    <div style={{ color: 'white' }}>{name}</div>
                </div>

            )
        })
    }

    const renderTracks = () => {
        return tracks.map(track => {
            const { name, album } = track
            const { images } = album
            const width = 50
            const height = 50
            // if (!images) return <p>No Images</p>

            // result item component
            const { url = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAM1BMVEW7u7vz8/Pu7u739/e4uLji4uK+vr7Kysq0tLTHx8fR0dHr6+vExMTn5+fNzc3f39/Z2dlS1a/0AAADkklEQVR4nO2aiXKjMBBErQOhE/j/r93RCHM44HWqtJE21a9cwUEYpumZQVA8HgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAdTFUaCtHTUJ2plZZR/QMm3UbMrARRTwfvbW4kZuDDy2qwmKGdGJVGV40xtRUjva6Ibysm1KxXPUrV1JnxW8cuBtyOjrKlM+qbYnzuffPdtbFHZ26jMWHt5e56k8bOXIiJU7zbvmjJXHvTnTNRquDNVUB62rTcXBm7c4ZmBUoM/iLXbNrECHG9w76c0a5UhRicfQ3KioMYd7nDvsTY8IxWLsaeN7fiwGVd9SVG+8PJD/58RbHDPijvaqYjMaeTT3LOueY6bwDni6Ze1EkMneZjX7Pzc/jamL6cieIVpbw5/UC90dLamZMYPXwRQ3LkuLtD99khpKu+XYb7EaOnCy2ca26LXluead5MzjpKM5PUpRq6vCzxHKEx0dCf17D7aQB6uZbCcsJyiFw7ssa44Uu+deOMjuFeDJmTvN5Cz1lmZmoGaTr17j7E5DiXmyTb5bh1SqAjOTMGmbvDHA/zhE7STGsn32ph5gfPCXQkNSmVH8hlz7VOnNFmeG/MSpnhaGP8bpkcn7nWQWvWVNt0ryJDLpogc/rkZ2lcQrTgTzGBhtLIpWMo7cpQoN6dYqmnHsTkoycRAsVKweXQKcqQteUFf5Xlex5cqCXbWZZN8jA7xleeLmpGPyb2YNUSZBEhWQArIzG8hr3wJgrJxshiWx4a6Y6htZjgyBhtQnm6ylpYgxDFFLnKo7Fc8SX70kCLTXaRLubJNG4AKoxU/XYR4SlmzSipshHZl8Bxl4pZa2hdKcp4STipxGQbi+Gaic/n3sUZrgfOny3ufYPNqqMYTkTpbQc1YxPHXWItVU7LFIoznFFsU650LnpxEMNtoySks675dSafzzWLVAlWruc7OyO2VJKlPa8d/Clo7Xp5k7FxmmUxRv5tIvMhrdOMxFj/wUTm/xFTSQuLaZxmEHMrpnFrhjO3YtAAIOYHxDRPs0oXzR4mmr8qzegGoI4WGVs/A8g3Z9FXIerWYvLDI22r0P7dGZX8SEz0mejvxJ/jv+vK19VftyJ847eaxK9532z++L7rc1q9Cfhw9d5o3Ll8Q+AH0G6uzs07Qj8ip/Kha+8PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAd/gDhN89GiWuMNkAAAAASUVORK5CYII=" } = images[0] || {}
            return (

                <div key={track.id} style={
                    {
                        display: "flex",
                        flexDirection: "",
                        width: 800,
                        alignItems: "center"
                    }}>

                    {<img width={width} height={height} src={url} alt="" />}
                    <div style={{ color: 'white' }}>{name}</div>
                </div>

            )
        })
    }

    return (
        <div>
            {renderTracks()}
            {renderArtists()}

        </div>


    )
}