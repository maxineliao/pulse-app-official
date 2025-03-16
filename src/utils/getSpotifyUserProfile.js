import axios from "axios";
const { VITE_SPOTIFY_API_PATH } = import.meta.env;

export const getSpotifyUsersProfile = async(accessToken) => {
    try {
        let url = `${VITE_SPOTIFY_API_PATH}me`;
        const response = await axios.get(url,{
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        const userData = response.data;
        return userData;
    } catch (error) {
        console.log(`Can't get user's profile: ${error.message?.data}`);
    }
}