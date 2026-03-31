import { useState, useEffect, useCallback } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
  avatarLetter: string; // 用户名字首字母，用于显示头像
}

const STORAGE_KEY = 'forex_help_user';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // 从 localStorage 恢复登录状态
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setUser(parsed);
      } catch (error) {
        console.error('Failed to parse stored user:', error);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    setLoading(false);
  }, []);

  // 登录
  const login = useCallback((email: string, password: string) => {
    // 原型阶段简单模拟登录，实际应用中应调用后端 API
    return new Promise<User>((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          const name = email.split('@')[0];
          const newUser: User = {
            id: `user_${Date.now()}`,
            email,
            name,
            avatarLetter: name.charAt(0).toUpperCase(),
          };
          
          localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
          setUser(newUser);
          resolve(newUser);
        } else {
          reject(new Error('邮箱和密码不能为空'));
        }
      }, 500);
    });
  }, []);

  // 注册
  const register = useCallback((email: string, name: string, password: string) => {
    return new Promise<User>((resolve, reject) => {
      setTimeout(() => {
        if (email && name && password) {
          const newUser: User = {
            id: `user_${Date.now()}`,
            email,
            name,
            avatarLetter: name.charAt(0).toUpperCase(),
          };
          
          localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
          setUser(newUser);
          resolve(newUser);
        } else {
          reject(new Error('所有字段都不能为空'));
        }
      }, 500);
    });
  }, []);

  // 退出登录
  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }, []);

  return {
    user,
    loading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
  };
}