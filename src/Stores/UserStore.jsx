import { create } from "zustand";

const UserStore = create()((set) => ({
  user:{
    currentUser: null,
    isLoading: true,
  },

  // 로그인 시 사용자 정보 저장
  setUser : (userInfo) =>
    set((prev) => ({
      user: {
        ...prev.user,
        currentUser: userInfo,
        isLoading: false,
      }
    })),

  // 로그아웃 시 사용자 정보 삭제
  clearUser : () => 
    set((prev) => ({
      user: {
        ...prev.user,
        currentUser: null,
        isLoading: false,
      }
    }))
}));

export default UserStore;