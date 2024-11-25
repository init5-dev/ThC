import { Octokit } from "octokit"

interface InitProps {
  auth: string
  owner: string
  repo: string
  author: string
  email: string,
  apiVersion: string
}

interface SHA {
  sha?: string
}

class GitFile {
  private auth: string
  private owner: string
  private repo: string
  private author: string
  private email: string
  private apiVersion: string
  private octokit

  constructor({ auth, owner, repo, author, email, apiVersion }: InitProps) {
    this.auth = auth
    this.owner = owner
    this.repo = repo
    this.author = author
    this.email = email
    this.apiVersion = apiVersion

    this.octokit = new Octokit({
      auth: this.auth
    })
  }

  private async getFileSHA(path: string) {
    const { data: fileData } = await this.octokit.rest.repos.getContent({
      owner: this.owner,
      repo: this.repo,
      path,
    })

    const sha = (fileData as SHA)?.sha

    return sha
  }

  async read(path: string) {
    const response = await this.octokit.request(`GET /repos/${this.owner}/${this.repo}/contents/${path}`, {
      owner: this.owner,
      repo: this.repo,
      path,
      headers: {
        'X-GitHub-Api-Version': this.apiVersion
      }
    })

    const data = response.data
    const decodedContent = Buffer.from(data.content, data.encoding).toString('utf-8')

    return {
      content: decodedContent
    }
  }

  async createOrUpdate(path: string, content: string) {
    return await this.octokit.request(`PUT /repos/${this.owner}/${this.repo}/contents/${path}`, {
      owner: this.owner,
      repo: this.repo,
      path,
      message: `Create file: ${path}`,
      committer: {
        name: this.author,
        email: this.email
      },
      content: Buffer.from(content, 'utf-8').toString('base64'),
      headers: {
        'X-GitHub-Api-Version': this.apiVersion
      }
    })
  }

  async delete(path: string) {
    const sha = await this.getFileSHA(path)

    return await this.octokit.request(`DELETE /repos/${this.owner}/${this.repo}/contents/${path}`, {
      owner: this.owner,
      repo: this.repo,
      path,
      message: `Path file: ${path}`,
      committer: {
        name: this.author,
        email: this.email
      },
      sha,
      headers: {
        'X-GitHub-Api-Version': this.apiVersion
      }
    })
  }
}

export default GitFile