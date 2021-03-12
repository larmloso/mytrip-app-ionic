import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fs: AngularFirestore) { }

    readData() {
        return this.fs.collection('listnote').snapshotChanges();
    }

    //delete
    delData(docId: any) {
        return this.fs.doc('listnote/' + docId).delete();

    }

    createData(tmpdoc: any) {
        return this.fs.collection('listnote').add(tmpdoc);
    }

    updateData(docId: any, tmpdoc: any) {
        return this.fs.doc('listnote/' + docId).update(tmpdoc);
    }
}
