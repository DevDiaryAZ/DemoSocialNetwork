import * as axios from "axios";

const instanse = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:
        {"API-KEY": "dd1bfa68-511d-4367-ad9e-cbdcca26cb22"}
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
    },
    follow(userId) {
        return instanse.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instanse.delete(`follow/${userId}`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instanse.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instanse.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instanse.put(`profile/status/`, {status: status})
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile)

        return instanse.put(`profile/photo`,formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instanse.put(`profile`,profile);
    }
}

export const authAPI = {
    me() {
        return instanse.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instanse.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instanse.delete(`auth/login`);
    }
}






