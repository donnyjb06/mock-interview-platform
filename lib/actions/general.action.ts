import { db } from "@/firebase/admin"

export const getInterviewsByUserID = async (userId: string): Promise<Interview[] | null> => {
  const interviews = await db
    .collection("interviews")
    .where("userId", "==", userId)
    .orderBy("createdAt", "desc")
    .get()

  return interviews.docs.map( doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Interview[]
}

export const getlatestInterviews = async (params: GetLatestInterviewsParams): Promise<Interview[] | null> => {
  const { userId, limit = 20 } = params

  const interviews = await db
    .collection("interviews")
    .orderBy("createdAt", "desc")
    .where("finalized", "==", true)
    .where("userId", "!=", userId)
    .limit(20)
    .get()

  return interviews.docs.map( doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Interview[]
}

export const getInterviewsById = async (id: string): Promise<Interview | null> => {
  const interviews = await db
    .collection("interviews")
    .doc(id)
    .get()

  return interviews.data() as Interview | null;
}