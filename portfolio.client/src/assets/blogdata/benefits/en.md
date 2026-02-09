# Migrating a Legacy Government Benefits Platform to Azure AD B2C

## The Challenge

I joined a project to modernize a government benefits platform that serves thousands of active and retired employees. The application was an MVC app with some React components, running on a legacy IdentityServer for authentication. Our job was to migrate it to Azure AD B2C and move authentication to the cloud.

The main challenge was working with limited documentation on the existing system. We needed to understand how everything worked, plan the migration, and execute it without causing downtime or forcing users to reset their passwords. Since the user base includes both current employees and retirees, we wanted to keep things as simple as possible for everyone.

## Technical Approach

After analyzing the existing system, we realized we had an advantage: access to the hashed passwords from the legacy IdentityServer. This meant we could migrate users without making them reset their passwords.

The solution was to set up Azure AD B2C with custom policies that could handle authentication against both systems during the transition. When a user logged in, the system would check Azure AD B2C first. If they weren't migrated yet, we'd validate their credentials against the old IdentityServer, and if successful, automatically store their password in Azure AD B2C. The user would just log in normally and be migrated without knowing anything changed.

This approach avoided the hassle of coordinating password resets with thousands of users and meant we could migrate people gradually as they logged in naturally.

## Architecture Decisions

We chose to use Azure AD B2C custom policies instead of the standard user flows because we needed that extra flexibility for the hybrid authentication logic. Custom policies have more of a learning curve, but they gave us the control to handle the transition smoothly.

Instead of doing a bulk migration all at once, we designed it to happen gradually as users logged in. This was less risky and let us monitor how things were going in production. If we hit any edge cases, we could address them without affecting everyone.

During the transition, we maintained a connection between Azure AD B2C and the IdentityServer, with appropriate security measures and fallback options to keep things reliable.

## Results and Impact

The migration went smoothly. We had no downtime and very few support tickets. Users were migrated to the new system without needing password resets, which was the main goal.

Beyond just completing the migration, moving to Azure AD B2C set up the application for future improvements. The platform has built-in support for multi-factor authentication, conditional access, and integration with other cloud services, which would have been much harder to add to the old setup.

## Key Takeaways

This project taught me a few things about working with legacy systems. First, even when documentation is sparse, taking the time to really understand the existing setup is worth it. Second, sometimes you can use what's already there (like those hashed passwords) to solve problems in ways that are better for users. Third, choosing the right tools and approaches upfront, even if they're more complex initially, usually makes execution smoother.

My role involved analyzing the problem, planning the solution, and seeing it through to completion. It was good experience in balancing technical requirements with user needs, especially when serving a diverse user base.

---

**Context:** Professional flexstaffing for Orbid

**Tech stack:** MVC Asp.net, React, Azure AD B2C, IdentityServer, Azure hosting
