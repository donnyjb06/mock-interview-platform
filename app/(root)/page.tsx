import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/InterviewCard'
import { getCurrentUser } from '@/lib/actions/auth.action'
import { getInterviewsByUserID, getlatestInterviews } from '@/lib/actions/general.action'

const Page = async () => {
  const user = await getCurrentUser()

  const [userInterviews, latestInterviews] = await Promise.all([
    await getInterviewsByUserID(user?.id!),
    await getlatestInterviews({ userId: user?.id! })
  ])

  
 

  const hasPastInterviews = userInterviews?.length > 0;
  const hasUpcomingInterviews = latestInterviews?.length > 0;

  return (
    <>
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>Get Interview Ready with AI-Powered Practice & Feedback</h2>

          <p className='text-lg'>
            Practice on real interview question and get instant feedback
          </p>

          <Button asChild className='btn-primary max-sm:w-full'>
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image src="/robot.png" alt='Robo-dude' width={400} height={400} className='max-md:hidden'/>
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Your Past Interviews</h2>

        <div className='interviews-section'>
          {
            hasPastInterviews ? (
              userInterviews?.map(interview => (
                <InterviewCard {...interview} key={interview.id}/>
              ))): (
              <p>You haven&apos;t taken any interviews yet</p>
            )}
        </div>

        
      </section>

      <section className='flex flex-col gap-6 mt-8 '>
        <h2>Take an Interview</h2>

        <div className='interviews-section'>
        {
            hasUpcomingInterviews ? (
              latestInterviews?.map(interview => (
                <InterviewCard {...interview} key={interview.id}/>
              ))): (
              <p>There are no new Interviews available</p>
            )}
        </div>
      </section>
    </>
  )
}

export default Page