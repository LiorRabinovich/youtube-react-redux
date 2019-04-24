export const changeSiteName = (newSiteName) => {
    return {
        type: "CHANGE_SITE_NAME",
        payload: newSiteName
    }
}