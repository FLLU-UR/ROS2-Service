import { Injectable } from '@angular/core';
import { QoSProfile, Ros2Client } from '@universal-robots/contribution-api';
import { from, Observable, switchMap } from 'rxjs';
import { Ros2Topics } from './ros2-topics';

@Injectable({
  providedIn: 'root'
})
export class Ros2Service {
  private ros2Client: Ros2Client;

  constructor() { }

  /**
   * Initializes the Ros2Service with a given ROS2 client.
   * 
   * @param ros2Client - An instance of Ros2Client to be used by the service.
   */
  initialize(ros2Client: Ros2Client): void {
    this.ros2Client = ros2Client;
  }

  /**
 * Creates a subscription to a specified ROS2 topic.
 * 
 * @param topic - Topic from the Ros2Topics Definition
 * 
 * @returns An Observable<T> to the specified ROS2 topic
 */
  createSubscription<T>(topic: { name: string; messageType: string; createQoSProfile: () => QoSProfile; type: T }): Observable<T> {
    const topicName = topic.name;
    const qosProfile = topic.createQoSProfile();
    const messageType = topic.messageType;

    return this.getTopicPath(true, topicName).pipe(
      switchMap(topicPath => from(this.ros2Client.createSubscription<T>(messageType, topicPath, qosProfile)))
    );
  }

  private getTopicPath(useNamespace: boolean, topicName: string): Observable<string> {
    return from(this.ros2Client.getTopicPath(useNamespace, topicName));
  }



}

