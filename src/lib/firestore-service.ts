import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export interface AuditFormData {
  name: string;
  companyName: string;
  email: string;
  submittedAt: any;
  status?: string;
  source?: string;
}

/**
 * Saves audit form data to Firestore
 * @param formData The audit form data to save
 * @returns Promise that resolves with the document reference
 */
export async function saveAuditFormData(formData: Omit<AuditFormData, 'submittedAt'>) {
  try {
    // Add timestamp and initial status
    const dataToSave: AuditFormData = {
      ...formData,
      submittedAt: serverTimestamp(),
      status: 'pending',
      source: typeof window !== 'undefined' ? window.location.href : 'unknown'
    };
    
    // Add to the auditForms collection
    const docRef = await addDoc(collection(db, 'auditForms'), dataToSave);
    console.log('Audit form saved with ID:', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error saving audit form data:', error);
    return { success: false, error };
  }
}

export interface BlogSubscription {
  email: string;
  submittedAt: any;
  status?: string;
  source?: string;
  topics?: string[];
}

/**
 * Saves blog subscription to Firestore
 * @param subscription The blog subscription data to save
 * @returns Promise that resolves with the document reference
 */
export async function saveBlogSubscription(subscription: Omit<BlogSubscription, 'submittedAt'>) {
  try {
    // Add timestamp and initial status
    const dataToSave: BlogSubscription = {
      ...subscription,
      submittedAt: serverTimestamp(),
      status: 'active',
      source: typeof window !== 'undefined' ? window.location.href : 'unknown'
    };
    
    // Add to the blogSubscriptions collection
    const docRef = await addDoc(collection(db, 'blogSubscriptions'), dataToSave);
    console.log('Blog subscription saved with ID:', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error saving blog subscription:', error);
    return { success: false, error };
  }
} 