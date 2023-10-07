import { Injectable } from '@angular/core';
import { of, firstValueFrom } from 'rxjs';
import { signInWithEmailAndPassword, GithubAuthProvider, getAuth, signInWithPopup, UserCredential, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { ApplicationUser } from '../models/application-user';
import { LoginUser } from '../models/login-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(user: LoginUser) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  public loginGithub(): Promise<UserCredential> {
    let authProvider = new GithubAuthProvider();
    return signInWithPopup(getAuth(), authProvider);
  }

  public loginGoogle(): Promise<UserCredential> {
    let authProvider = new GoogleAuthProvider();
    return signInWithPopup(getAuth(), authProvider);
  }

  public logout(): Promise<void> {
    return signOut(getAuth());
  }

  public register(user: ApplicationUser): Promise<boolean> {
    try {
      return createUserWithEmailAndPassword(getAuth(), user.email, user.password)
      .then(async res => {
        if (res.user) {
          await updateProfile(res.user, { displayName: user.displayName, photoURL: user.photoUrl });
        }
        return true;
      });
    } catch (error) {
      return firstValueFrom(of(false));
    }
  }
  
}
